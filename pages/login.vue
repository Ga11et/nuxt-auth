<template>
	<ClientOnly>
		<div>
			<h1>Login form</h1>
			<div v-if="isAuth === 'authenticated' && user">
				<h2>You are logged as {{ user.name }}</h2>
				<img :src="user.image" :alt="user.name" />
				<p>email: {{ user.email }}</p>
				<button @click="signOut">logout</button>
			</div>
			<div v-else>
				<h2>You are not logged</h2>
				<button @click="signIn('google')">sign in with google</button>
				<form>
					<h3>Credentials login form</h3>
					<input v-model="formData.username" />
					<input v-model="formData.password" />
					<button @click.prevent="submitHandler">sign in with credentials</button>
				</form>
			</div>
		</div>
	</ClientOnly>
</template>
<script setup>
import { useAuthStore } from '~/stores/auth'

const { data, status, signIn, signOut } = useSession()

const authStore = useAuthStore()

const formData = {
	username: '',
	password: ''
}

const submitHandler = () => {
	signIn('credentials', formData)
}

onMounted(() => {
	authStore.setStatus(status)
	if (data.value.user)
		authStore.setUser(data.value.user)
})

const user = computed(() => authStore.getUser)
const isAuth = computed(() => authStore.getStatus)

</script>
<style lang="scss">
    
</style>