<!-- UserSideInfo -->
<template>
  <v-layout column>
    <v-layout row xs12>
      <v-flex style="margin-left:120px">
        <v-avatar size="100" class="grey lighten-2">
          <!--USER 이미지 넣는곳-->
        </v-avatar>
      </v-flex>
    </v-layout>

    <!--USER 자기소개-->
    <v-layout style="background:white;">
      <v-card-text>
        <p class="subheading grey--text text-md-center">{{user.name}}</p>
        <p class="subheading grey--text text-md-center">{{user.intro}}</p>
      </v-card-text>
    </v-layout>

    <!--USER SKILLS-->
    <v-layout row xs12>
      <v-flex style="background:white;">
        <v-card-text>
          <p class="subheading black--text text-md-center">SKILLS</p>
        </v-card-text>
        <v-flex>
          <v-btn v-for="skill in skills" flat small round outline>{{ skill.name }}</v-btn>
        </v-flex>
      </v-flex>
    </v-layout>

    <!--USER 정보 추가 예정-->
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
