<template>
	<div>
		<p>Class 1</p>
		<input 
			type="text" 
			v-model="message">
		<p>Class 2</p>
		<input 
			type="text" 
			v-model="message1">
		<p>Class 3</p>
		<input 
			type="text" 
			v-model="message2">
		<p>Class 4</p>
		<input 
			type="text" 
			v-model="message3">
		<p>Classes: {{ message }}, {{ message1 }}, {{ message2 }}, {{ message3 }}</p>
		<br>
		<select v-model="selected">
			<option disabled value="">Please select one</option>
			<option>Spring</option>
			<option>Fall</option>
		</select>
		<br>
		<br>
		<span>Selected: {{ selected }}</span>
	</div>
</template>

<script>
export default {
	data() {
		return{
			message: '',
			message1: '',
			message2: '',
			message3: '',
			selected: ''
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
