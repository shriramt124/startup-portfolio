import DotGrid from '../ui/DotGrid';
import FluidGlass from '../ui/FluidGlass';
import GridDistortion from '../ui/GridDistortion';
import LiquidEther from '../ui/LiquidEther';

export default function Hero() {
    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative', display: 'flex' }}>
            {/* Left Half - Liquid Ether Background with Content */}
            <div style={{ width: '50%', height: '100%', position: 'relative', background: 'rgba(0,0,0,0.3)' }}>
                <LiquidEther
                    colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={true}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />

                {/* Hero Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center z-10 px-8 lg:px-16 pt-20">
                    <div className="max-w-xl">
                        {/* Main Heading - Reduced Size */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6">
                            <span className="text-white block">BUILD BETTER</span>
                            <span className="text-white block">SOLUTIONS</span>
                            <span className="text-white">WITH </span>
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                EFICSY
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-sm md:text-base text-gray-200 mb-8 leading-relaxed max-w-md">
                            Grow your business to the next level to improve your business performance to stay competitive
                        </p>

                        {/* CTA Button */}
                        <button className="px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-blue-500/50 mb-12">
                            Let's Discuss
                        </button>

                        {/* Stats */}
                        <div className="flex gap-10">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">10+</div>
                                <div className="text-xs text-gray-300">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">5+</div>
                                <div className="text-xs text-gray-300">Teams</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">263</div>
                                <div className="text-xs text-gray-300">Business Partners</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Half - Different Color Background with Cards */}
            <div style={{
                width: '50%',
                height: '100%',
                background: 'linear-gradient(135deg, #492efcff 0%, #5b27f6ff 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Top Card - Coming from Left */}
                <div 
                    className="absolute top-28 left-0 bg-white/95 backdrop-blur-md rounded-r-2xl shadow-2xl p-6 z-10"
                    style={{
                        width: '320px',
                        animation: 'slideInLeft 0.8s ease-out forwards'
                    }}
                >
                    <div>
                        <h3 className="font-bold text-gray-800 text-base mb-1">Business-First Approach</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">We solve problems—not just write code.</p>
                    </div>
                </div>
                {/* Connection Strip for Top Card */}
                <div 
                    className="absolute top-32 right-36 h-0.5 bg-gradient-to-r from-white/60 to-white/20 z-5"
                    style={{
                        width: 'calc(100% - 470px)',
                        animation: 'fadeIn 1s ease-out 0.3s forwards',
                        opacity: 0
                    }}
                ></div>
                {/* Circular Image for Top Card - Right Side */}
                <div 
                    className="absolute top-24 right-8 w-28 h-28 rounded-full overflow-hidden border-2 border-white/40 shadow-xl z-10"
                    style={{
                        animation: 'fadeInRight 1s ease-out 0.2s forwards',
                        opacity: 0
                    }}
                >
                    <img 
                        src="/curcularimage1.png" 
                        alt="Icon 1" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Middle Card - Centered Right */}
                <div 
                    className="absolute top-1/2 right-8 -translate-y-1/2 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 z-10"
                    style={{
                        width: '320px',
                        animation: 'fadeInRight 1s ease-out 0.3s forwards',
                        opacity: 0
                    }}
                >
                    <div>
                        <h3 className="font-bold text-gray-800 text-base mb-1">Fast & Transparent Delivery</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">See progress weekly. Pay only for value.</p>
                    </div>
                </div>
                {/* Connection Strip for Middle Card */}
                <div 
                    className="absolute top-1/2 left-36 -translate-y-1/2 h-0.5 bg-gradient-to-r from-white/20 to-white/60 z-5"
                    style={{
                        width: 'calc(100% - 470px)',
                        animation: 'fadeIn 1s ease-out 0.5s forwards',
                        opacity: 0
                    }}
                ></div>
                {/* Circular Image for Middle Card - Left Side */}
                <div 
                    className="absolute top-1/2 left-8 -translate-y-1/2 w-28 h-28 rounded-full overflow-hidden border-2 border-white/40 shadow-xl z-10"
                    style={{
                        animation: 'slideInLeft 0.8s ease-out 0.4s forwards',
                        opacity: 0
                    }}
                >
                    <img 
                        src="/curcularimage2.png" 
                        alt="Icon 2" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Bottom Card - Coming from Left */}
                <div 
                    className="absolute bottom-16 left-0 bg-white/95 backdrop-blur-md rounded-r-2xl shadow-2xl p-6 z-10"
                    style={{
                        width: '320px',
                        animation: 'slideInLeft 0.8s ease-out 0.5s forwards',
                        opacity: 0
                    }}
                >
                    <div>
                        <h3 className="font-bold text-gray-800 text-base mb-1">Built to Scale & Secure</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">Enterprise-grade architecture, startup-friendly cost.</p>
                    </div>
                </div>
                {/* Connection Strip for Bottom Card */}
                <div 
                    className="absolute bottom-20 right-36 h-0.5 bg-gradient-to-r from-white/60 to-white/20 z-5"
                    style={{
                        width: 'calc(100% - 470px)',
                        animation: 'fadeIn 1s ease-out 0.7s forwards',
                        opacity: 0
                    }}
                ></div>
                {/* Circular Image for Bottom Card - Right Side (Teams - Larger) */}
                <div 
                    className="absolute bottom-12 right-8 w-36 h-36 rounded-full overflow-hidden border-2 border-white/40 shadow-xl z-10"
                    style={{
                        animation: 'fadeInRight 1s ease-out 0.6s forwards',
                        opacity: 0
                    }}
                >
                    <img 
                        src="/circularimage3.png" 
                        alt="Teams" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}