<template>
	<main>
		<h1>Login form</h1>
		<div v-if="status === 'authenticated'">
			<h2>You are logged as {{ data.user.name }}</h2>
			<img :src="data.user.image" :alt="data.user.name" />
			<p>email: {{ data.user.email }}</p>
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
	</main>
</template>
<script setup>
const { data, status, signIn, signOut } = useSession()

const formData = {
	username: '',
	password: ''
}

const submitHandler = () => {
	signIn('credentials', formData)
}
</script>
<style lang="scss">
    
</style>