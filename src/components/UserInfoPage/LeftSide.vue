<!-- UserSideInfo -->
<template>
  <v-layout column>
    <v-layout row xs12>
      <v-responsive class="pt-4">
        <v-avatar size="100" class="grey lighten-2">
          <!--이미지 넣는곳-->
        </v-avatar>
      </v-responsive>
      <v-flex style="background:white;">
        <v-flex>{{user.name}}</v-flex>
        <v-flex>{{user.intro}}</v-flex>
      </v-flex>
    </v-layout>

    <v-layout row xs12>
      <v-flex style="background:white;">
        <v-flex>SKILLS</v-flex>
        <v-flex>
          <v-btn v-for="skill in skills" flat small round outline>{{ skill.name }}</v-btn>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: "c++" },
        { name: "java" },
        { name: "c" },
        { name: "python" },
        { name: "javaScript" },
        { name: "AWS " }
      ],
      user: {
        name: "hyeongrae",
        intro: "hello my name is palkim"
      }
    };
  }
};
</script>
