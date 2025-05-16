<template>
  <div>
    <b-card>
      <h4 class="mb-3">
        🛠️ Destek Paneli — Kullanıcı: {{ userName || userId }}
      </h4>

      <div class="chat-box">
        <div
          v-for="(msg, i) in messages"
          :key="i"
          :class="['chat-message', msg.from === 'admin' ? 'admin' : 'user']"
        >
          <div class="message-content">
            <div class="sender">
              <strong>{{ msg.from === 'admin' ? 'Admin' : msg.userName || 'Kullanıcı' }}</strong>
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

      <b-input-group class="mt-3">
        <b-form-input
          v-model="newMessage"
          placeholder="Mesaj yaz..."
          @keyup.enter="sendReply"
        />
        <b-input-group-append>
          <b-button
            variant="primary"
            @click="sendReply"
          >
            Gönder
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </b-card>
  </div>
</template>

<script>
import io from 'socket.io-client'
import {
  BFormInput, BButton, BInputGroup, BInputGroupAppend, BCard,
} from 'bootstrap-vue'

export default {
  components: {
    BFormInput,
    BButton,
    BInputGroup,
    BInputGroupAppend,
    BCard,
  },
  data() {
    return {
      socket: null,
      userId: this.$route.params.id,
      userName: '', // Kullanıcının adı
      messages: [],
      newMessage: '',
    }
  },
  mounted() {
    this.socket = io('http://localhost:3001')

    this.socket.on('connect', () => {
      console.log('Admin bağlandı:', this.socket.id)
      this.socket.emit('admin:join', this.userId)
    })

    this.socket.on('support:newMessage', ({
      userId, message, userName, timestamp,
    }) => {
      if (userId == this.userId) {
        if (!this.userName && userName) {
          this.userName = userName
        }
        this.messages.push({
          from: 'user',
          message,
          userName,
          timestamp: timestamp || new Date().toISOString(),
        })
      }
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
  methods: {
    sendReply() {
      if (!this.newMessage.trim()) return
      const timestamp = new Date().toISOString()

      this.socket.emit('admin:reply', {
        userId: this.userId,
        message: this.newMessage,
        timestamp,
      })

      this.messages.push({
        from: 'admin',
        message: this.newMessage,
        timestamp,
      })

      this.newMessage = ''
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
