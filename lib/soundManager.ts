// lib/sound-manager.ts
class SoundManager {
  private audioCache: Map<string, HTMLAudioElement> = new Map()

  playAudio(url: string) {
    if (typeof window === 'undefined') return

    let audio = this.audioCache.get(url)
    if (!audio) {
      audio = new Audio(url)
      audio.preload = 'auto'
      this.audioCache.set(url, audio)
    }

    audio.currentTime = 0
    audio.play().catch(err => {
      console.warn(`Audio play failed for ${url}:`, err)
    })
  }

  playClick() {
    this.playAudio(
      'https://assets.chanhdai.com/audio/ui-sounds/click.wav' // Source: iOS UI Sounds
    )
  }

  // Additional sound methods you can add:
  playToggle() {
    this.playAudio('https://assets.chanhdai.com/audio/ui-sounds/toggle.wav')
  }

  playSuccess() {
    this.playAudio('https://assets.chanhdai.com/audio/ui-sounds/success.wav')
  }

  playError() {
    this.playAudio('https://assets.chanhdai.com/audio/ui-sounds/error.wav')
  }

  playNotification() {
    this.playAudio('https://assets.chanhdai.com/audio/ui-sounds/notification.wav')
  }
}

const soundManager = new SoundManager()
export default soundManager
