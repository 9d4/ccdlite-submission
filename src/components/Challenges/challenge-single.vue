<script setup>
import challenges from '../../data/challenges';
import axios from 'axios';
</script>

<script>
export default {
  data() {
    return {
      challenge: {},
      phone: null,
      name: '',
      clas: '',
      answer: '',
      detail: '',
      sending: false,
      disabled: false,
    };
  },
  methods: {
    findChallengeByChalCode(chalcode) {
      return challenges.find((chal) => chal.code == chalcode);
    },
    submitForm() {
      this.sending = true;
      const formAction = 'https://formspree.io/f/mzbwbonw';

      const self = this;
      const formData = new FormData();
      formData.append('subject', `CCDLITE Submission - ${this.challenge.code}`);
      formData.append('name', self.name);
      formData.append('class', self.clas);
      formData.append('answer', self.answer);
      formData.append('detail', self.detail);
      formData.append('whatsapp', self.phone);

      axios({
        url: formAction,
        method: 'POST',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
        data: formData,
      })
        .then((res) => {
          if (res.status == 200) {
            alert('Your submisssion has been sent! Thank You!');
            this.$router.push('/');
          }
        })
        .catch((res) => {
          alert('Something went wrong! Try Again!');
        })
        .finally(() => {
          this.sending = false;
        });
    },
  },
  created() {
    const chalcode = this.$route.params.chalcode;
    this.challenge = this.findChallengeByChalCode(chalcode);

    if (!this.challenge) {
      this.$router.push('/');
    }
  },
};
</script>

<template>
  <div class="challenge-single">
    <h2>{{ challenge.name }}</h2>
    <p>{{ challenge.description || 'No description' }}</p>

    <div v-if="disabled">Submission temporarily disabled!</div>

    <form @submit.prevent="submitForm" v-if="!sending && !disabled">
      <input
        type="number"
        name="email"
        placeholder="WhatsApp Number"
        required
        v-model="phone"
      />
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        v-model="name"
      />
      <input
        type="text"
        name="class"
        placeholder="Class"
        required
        v-model="clas"
      />
      <input
        type="text"
        name="answer"
        placeholder="Your Answer"
        required
        v-model="answer"
      />
      <textarea
        name="answer_detail"
        rows="5"
        placeholder="Please briefly explain how you get the answer!"
        required
        v-model="detail"
      ></textarea>
      <div class="submit-container">
        <button type="submit">Send to Us</button>
      </div>
    </form>

    <div class="sending-message" v-if="sending">
      <span>Sending...</span>
    </div>
  </div>
</template>

<style lang="scss">
@import './style.scss';
</style>
