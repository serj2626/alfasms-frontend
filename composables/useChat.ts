export const useChat = () => {
  const config = useRuntimeConfig()
  const messages = ref<{ text: string; from: string }[]>([])
  const newMessage = ref('')
  let socket: WebSocket

  onMounted(() => {
    socket = new WebSocket(config?.public.wsBase)

    socket.onmessage = (event) => {
      messages.value.push({ text: event.data, from: 'admin' })
    }

    socket.onclose = () => {
      console.log('WebSocket закрыт')
    }
  })

  const send = (text: string) => {
    messages.value.push({ text, from: 'me' })
    socket.send(text)
  }

  return { messages, send, newMessage }
}