<script setup>
import { ref, reactive, onMounted } from 'vue'
import UserLayout from '@/layouts/UserLayout.vue'

import { useEventStore } from '@/stores/event'

const eventStore = useEventStore()

const userForm = [
  { name: 'Email', field: 'email' },
  { name: 'Name', field: 'name' }
]

const userData = reactive({
  imageUrl: 'https://mikelopster.dev/mikelopster.da6b9a03.webp',
  email: '',
  name: ''
})

onMounted(() => {
  const savedUserProfile = localStorage.getItem('user-profile')
  if (savedUserProfile) {
    const userProfile = JSON.parse(savedUserProfile)
    userData.imageUrl = userProfile.imageUrl
    userData.email = userProfile.email
    userData.name = userProfile.name
  }
})

const handleFileChange = (event) => {
  const file = event.target.files[0]

  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      userData.imageUrl = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const updateProfile = () => {
  localStorage.setItem('user-profile', JSON.stringify(userData))
  eventStore.popupMessage('success', 'Update Profile successful!')
}
</script>

<template>
  <UserLayout>
    <div
      class="container mx-auto max-w-2xl p-4 bg-base-100 my-4 border border-base-200 shadow-md">
      <h1 class="text-2xl">67704242 - Suthara Chanachai</h1>
      <div class="flex flex-col items-center">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src="/dist/assets/image-DSNCGjza.png" alt="">
          </div>
        </div>
      </div>
    </div>
    
    <div
      class="container mx-auto max-w-2xl p-4 bg-base-100 my-4 border border-base-200 shadow-md">
      <h1 class="text-2xl">67706134 - จุลศักดิ์ โพธิ์สิทธิ์ </h1>
      <div class="flex flex-col items-center">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src="/dist/assets/Junlasak.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div
      class="container mx-auto max-w-2xl p-4 bg-base-100 my-4 border border-base-200 shadow-md">
      <h1 class="text-2xl">67711392 - Parinya Srisuntornpapoj</h1>
      <div class="flex flex-col items-center">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src="/dist/assets/67711392 Parinya Srisuntornpapoj.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div
      class="container mx-auto max-w-2xl p-4 bg-base-100 my-4 border border-base-200 shadow-md">
      <h1 class="text-2xl">67707514 - เจษฎากร แหลมแสน</h1>
      <div class="flex flex-col items-center">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src="/dist/assets/Jetsadakorn Laemsen.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div
      class="container mx-auto max-w-2xl p-4 bg-base-100 my-4 border border-base-200 shadow-md">
      <h1 class="text-2xl">67706660 - วัชรินทร์ สมบุญผลปรีชา</h1>
      <div class="flex flex-col items-center">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src="/dist/assets/67706660 นาย วัชรินทร์ สมบุญผลปรีชา.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div
      class="container mx-auto max-w-2xl p-4 bg-base-100 my-4 border border-base-200 shadow-md">
      <h1 class="text-2xl">67711265 - ธนัช ฉายาวัฒนะ</h1>
      <div class="flex flex-col items-center">
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src="/dist/assets/67711265 นาย ธนัช ฉายาวัฒนะ.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-primary w-full mt-4" @click="updateProfile">Upload your  profile</button>
  </UserLayout>
</template>
