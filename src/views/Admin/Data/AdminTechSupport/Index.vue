<template>
  <div>
    <h3 class="mb-4">
      📩 Gelen Kullanıcı Mesajları
    </h3>

    <b-row>
      <b-col
        v-for="(messages, userId) in latestMessages"
        :key="userId"
        cols="12"
        md="6"
        lg="4"
        class="mb-4"
      >
        <b-card
          :title="'Kullanıcı : ' + messages[messages.length-1].from"
          border-variant="primary"
          header-bg-variant="primary"
          header-text-variant="white"
        >
          <div class="mb-2">
            <b-badge
              variant="secondary"
              class="mr-1"
            >
              Son Mesaj:
            </b-badge>
            <strong>{{ messages[messages.length - 1].from }}:</strong>
            {{ messages[messages.length - 1].message }}<br>
            <small class="text-muted">
              {{ formatTimestamp(messages[messages.length - 1].timestamp) }}
            </small>
          </div>

          <div
            v-if="messages.length > 1"
            class="mb-2"
          >
            <b-link @click="showMessages(userId)">
              + {{ messages.length - 1 }} mesaj daha
            </b-link>
          </div>

          <b-button
            variant="outline-primary"
            block
            size="sm"
            @click="goToChat(userId)"
          >
            Görüntüle
          </b-button>
        </b-card>
      </b-col>
    </b-row>

    <!-- Mesaj geçmişi modalı -->
    <b-modal
      id="message-modal"
      v-model="isModalVisible"
      :title="'Kullanıcı Mesajları: ' + selectedUser"
      size="lg"
      hide-footer
    >
      <ul>
        <li
          v-for="(msg, index) in latestMessages[selectedUser]"
          :key="index"
        >
          <b>{{ msg.from }}:</b> {{ msg.message }}
          <br>
          <small class="text-muted">{{ formatTimestamp(msg.timestamp) }}</small>
        </li>
      </ul>
    </b-modal>
  </div>
</template>
<script>
import io from 'socket.io-client'
import {
  BCard, BRow, BCol, BButton, BBadge, BModal, BLink,
} from 'bootstrap-vue'

export default {
  components: {
    BCard, BRow, BCol, BButton, BBadge, BModal, BLink,
  },
  data() {
    return {
      socket: null,
      latestMessages: {}, // { userId: [ { message, from, timestamp }, ... ] }
      isModalVisible: false,
      selectedUser: null,
    }
  },
  mounted() {
    this.socket = io('http://localhost:3001')
    this.socket.emit('admin:join')

    this.socket.on('support:newMessage', ({
      userId, message, userName, timestamp,
    }) => {
      if (!this.latestMessages[userId]) {
        this.$set(this.latestMessages, userId, [])
      }
      this.latestMessages[userId].push({
        message,
        from: userName,
        timestamp: timestamp || new Date().toISOString(),
      })
    })

    this.socket.on('support:adminReply', ({ userId, message, timestamp }) => {
      if (!this.latestMessages[userId]) {
        this.$set(this.latestMessages, userId, [])
      }
      this.latestMessages[userId].push({
        message,
        from: 'admin',
        timestamp: timestamp || new Date().toISOString(),
      })
    })
  },
  methods: {
    goToChat(userId) {
      this.$router.push({ name: 'TechSupportAdminView', params: { id: userId } })
    },
    showMessages(userId) {
      this.selectedUser = userId
      this.isModalVisible = true
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
ul {
  padding-left: 1rem;
}
li {
  margin-bottom: 10px;
}
</style>
