import { watch, ref, onUnmounted } from '@vue/composition-api'
export const useHasImageLoaded = ({
  srcRef,
  onLoadRef = ref(null),
  onErrorRef = ref(null)
}) => {
  const hasLoaded = ref(false)
  const isMounted = ref(true)

  watch([srcRef, onLoadRef, onErrorRef], ([src, onLoad, onError]) => {
    if (!src) return
    const image = new window.Image()
    image.src = src

    image.onload = event => {
      if (isMounted.value) {
        hasLoaded.value = true
        onLoad && onLoad(event)
      }
    }

    image.onerror = event => {
      if (isMounted.value) {
        hasLoaded.value = false
        onError && onError(event)
      }
    }
  })

  onUnmounted(() => {
    isMounted.value = false
  })

  return hasLoaded
}

export const useHasAudioLoaded = ({ srcRef, onLoad, onError }) => {
  const hasLoaded = ref(false)
  const isMounted = ref(true)

  watch(srcRef, src => {
    if (!src) return
    hasLoaded.value = false
    const audio = document.createElement('audio')
    audio.src = src
    audio.addEventListener('canplay', () => {
      if (isMounted.value) {
        hasLoaded.value = true
        onLoad && onLoad(event)
        audio.remove()
      }
    })

    audio.onerror = event => {
      if (isMounted.value) {
        hasLoaded.value = false
        onError && onError(event)
        audio.remove()
      }
    }
  })

  onUnmounted(() => {
    isMounted.value = false
  })

  return hasLoaded
}
