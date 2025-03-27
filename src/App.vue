
<script>
export default {
  name: 'App',
  methods: {

    goToExercise() {
      this.$router.push('/exercise');
    },

    goToWorkout() {
      this.$router.push('/workout');
    },

    goToSchedule() {
      this.$router.push('/schedule');
    }
  }
}
</script>


<template>
  <div id="app">
    <router-view></router-view>

    <nav>
      <button @click="goToExercise">Exercise</button>
      <button @click="goToWorkout">Workout</button>
      <button @click="goToSchedule">Schedule</button>
    </nav>
    
  </div>
</template>

