<template>
  <v-container>
    <v-text-field v-model="title" label="제목" ></v-text-field>
    <div v-if="!image">
      <input type="file" @change="onFileChange" />
    </div>
    <div v-else>
      <img :src="image" /><br>
      <v-btn @click="removeImage">Remove image</v-btn>
    </div>
    <v-text-field v-model="content" label="내용" ></v-text-field>
    <v-btn @click="submit">업로드</v-btn>

    <v-layout row wrap mw-700>

      <v-flex v-for="i in projects.length">
        <Project
        :imglink="projects[i - 1].image"
        :title="projects[i - 1].title"
        :content="projects[i - 1].content">
      </Project>
      <v-divider></v-divider>
    </v-flex>
  </v-layout>
</v-container>

</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import Project from '../components/Project'
export default {
  name: "ImgUpload",
  data() {
    return {
      title: '',
      content:'',
      image: '',
      projects: [],
    };
  },
  components: {
    Project
  },
  created() {
    this.getProjects()
  },
  methods: {
    async getProjects() {
      this.projects = await FirebaseService.getProjects()
    },
    submit(){
      if(this.title == ""){
        alert("제목을 입력하세요");
      }
      else if(this.image == ""){
        alert("이미지를 선택하세요");
      }
      else if(this.content == ""){
        alert("내용을 입력하세요");
      }
      else{
        FirebaseService.ADD_project (this.title,this.image,this.content);
        alert("업로드 되었습니다");
        this.title = "";
        this.image = "";
        this.content = "";
      }
    },
    removeImage(){
      this.image = "";
    },
    onFileChange(e) {
      // file 세팅
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }

      const apiUrl = "https://api.imgur.com/3/image";
      const apiKey = "f96b8964f338658";

      let data = new FormData();
      let content = {
        method: "POST",
        headers: {
          Authorization: "Client-ID " + apiKey,
          Accept: "application/json"
        },
        body: data,
        mimeType: "multipart/form-data"
      };

      data.append("image", files[0]);

      fetch(apiUrl, content)
      .then(response => response.json())
      .then(success => {
        this.image = success.data.link;
      })
      .catch();
    }
  }
};
</script>
