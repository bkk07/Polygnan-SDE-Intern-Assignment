import { RewardLadder } from './components/reward-ladder'
import { CTASection } from './components/cta-section'

export default function App() {
  return (
    <div
      style={{ background: '#09090B', minHeight: '100vh' }}
    >
      <RewardLadder />
      <CTASection />
    </div>
  )
}
