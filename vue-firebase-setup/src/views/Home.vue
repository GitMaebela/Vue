// views/Home.vue

<template>
  <ul>
    <li  v-for="student of students" :key="student['.key']">
      {{student.id}} <br>
      {{student.name}} <br>
      {{student.email}}
    </li>
  </ul>
</template>

<script>
import { db } from '../firebaseDatabase';

export default {
  components: {
      // eslint-disable-next-line vue/no-unused-components
      name: 'Home'
  },
  data() {
    return {
      students: []
    }
  },
  created: function() {
      db.collection('students').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let item = doc.data()
          item.id = doc.id
          this.students.push(item)
        })
      })
  }  
}
</script>