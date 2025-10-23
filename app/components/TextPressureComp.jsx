import Ribbons from "@/components/Ribbons";
import TextPressure from "@/components/TextPressure";



export default function TextPressureComp() {
    return (
        <div style={{ position: 'relative', height: '500px', width: '100%' }}>
            {/* Ribbons background */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <Ribbons
                    baseThickness={25}
                    colors={['#492efcff', '#5b27f6ff', '#6b3dffff']}
                    speedMultiplier={0.6}
                    maxAge={400}
                    enableFade={true}
                    enableShaderEffect={true}
                    effectAmplitude={1.5}
                    backgroundColor={[0, 0, 0, 0]}
                />
            </div>
            {/* Text on top */}
            <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
                <TextPressure
                    text="EFICSY"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={true}
                    textColor="#492efcff"
                    strokeColor="#03713eff"
                    minFontSize={36}
                />
            </div>
        </div>
    )
}