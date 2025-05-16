<template>
  <div>
    <b-card>
      <h4 class="mb-3">
        💬 Canlı Destek — Hoşgeldiniz, {{ userName }}
      </h4>

      <div class="chat-box">
        <div
          v-for="(msg, i) in messages"
          :key="i"
          :class="['chat-message', msg.from === 'me' ? 'user' : 'admin']"
        >
          <div class="message-content">
            <div class="sender">
              <strong>{{ msg.from === 'me' ? 'Ben' : 'Destek' }}</strong>
            </div>
            <div class="text">
              {{ msg.message }}
            </div>
            <div class="timestamp">
              {{ formatTimestamp(msg.timestamp) }}
            </div>
          </div>
        </div>
      </div>

      <b-form
        class="mt-3"
        @submit.prevent="sendMessage"
      >
        <b-form-group
          label="Mesaj"
          label-for="message"
        >
          <ValidationProvider
            #default="{ errors }"
            name="Mesaj"
            rules="required"
          >
            <b-form-input
              id="message"
              v-model="message"
              placeholder="Mesaj yaz..."
            />
            <small class="text-danger">{{ errors[0] }}</small>
          </ValidationProvider>
        </b-form-group>
        <b-button
          type="submit"
          variant="primary"
        >
          Gönder
        </b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { io } from 'socket.io-client'
import { ValidationProvider, localize } from 'vee-validate'
import { required } from '@validations'
import {
  BFormGroup, BFormInput, BForm, BButton, BCard,
} from 'bootstrap-vue'

export default {
  name: 'UserChat',
  components: {
    ValidationProvider,
    BFormGroup,
    BFormInput,
    BForm,
    BButton,
    BCard,
  },
  data() {
    return {
      socket: null,
      userId: JSON.parse(localStorage.getItem('userData')).id,
      userName: `${JSON.parse(localStorage.getItem('userData')).name} ${JSON.parse(localStorage.getItem('userData')).lastname}`,
      message: '',
      messages: [],
      required,
    }
  },
  mounted() {
    this.socket = io('http://localhost:3001')

    this.socket.on('connect', () => {
      console.log('Socket bağlandı:', this.socket.id)
      this.socket.emit('join', this.userId)
    })

    this.socket.on('support:adminReply', ({ userId, message, timestamp }) => {
      if (userId == this.userId) {
        this.messages.push({
          from: 'admin',
          message,
          timestamp: timestamp || new Date().toISOString(),
        })
      }
    })
  },
  created() {
    localize('tr')
  },
  methods: {
    sendMessage() {
      if (!this.message.trim()) return

      const timestamp = new Date().toISOString()

      this.socket.emit('user:message', {
        userId: this.userId,
        message: this.message,
        userName: this.userName,
        timestamp,
      })

      this.messages.push({
        from: 'me',
        message: this.message,
        timestamp,
      })

      this.message = ''
    },
    formatTimestamp(ts) {
      const date = new Date(ts)
      return date.toLocaleString('tr-TR', {
        dateStyle: 'short',
        timeStyle: 'short',
      })
    },
  },
}
</script>

<style scoped>
.chat-box {
  padding: 1rem;
  height: 400px;
  overflow-y: auto;
  border-radius: 8px;
}

.chat-message {
  display: flex;
  margin-bottom: 15px;
}

.chat-message.user {
  justify-content: flex-start;
}

.chat-message.admin {
  justify-content: flex-end;
}

.message-content {
  min-width: 30%;
  max-width: 70%;
  padding: 10px;
  border-radius: 10px;
  background-color: #e0f0ff;
  position: relative;
}

.chat-message.admin .message-content {
  background-color: #d1f3d1;
  text-align: right;
}

.sender {
  font-size: 0.85rem;
  font-weight: bold;
}

.text {
  margin-top: 5px;
  word-break: break-word;
}

.timestamp {
  font-size: 0.7rem;
  color: #888;
  margin-top: 5px;
}
</style>
