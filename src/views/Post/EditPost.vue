<template>
  <div class="row justify-content-evenly">
    <div class="col col-2"><SideBar /></div>

    <div class="col col-10 w-75">
      <div class="container mt-4 justify-content-center w-75">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/dashboard/posts">Posts</a></li>
            <li class="breadcrumb-item active" aria-current="page">Edit</li>
          </ol>
        </nav>
        <h1 class="text-center display-2 pb-4" id="header">Edit Post</h1>
        <div id="postAlertPlaceholder" class="mb-3"></div>
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input required v-model="titleField" type="text" class="form-control" id="title" />
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">Author</label>
          <input required v-model="authorField" type="text" class="form-control" />
        </div>

        <div class="mb-3">
          <label for="post-input" class="form-label">Content</label>
          <textarea required v-model="contentField" class="form-floating form-control"
                    id="submission-input" style="height: 200px"></textarea>
        </div>

        <div class="mb-5">
          <button @click="save" type="button" class="btn btn-primary mt-2">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import axios from 'axios';
import SideBar from '@/components/SideBar.vue';
import {useRoute} from "vue-router";

const post = ref(null);
const postId = useRoute().params;

// Fetch the post details when the component is mounted
onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8080/api/posts/${postId.id}`);
    post.value = response.data;
    // Initialize form fields with post data
    titleField.value = post.value.title;
    authorField.value = post.value.author;
    contentField.value = post.value.content;
  } catch (error) {
    console.error('Error fetching post details:', error);
  }
});

const titleField = ref('');
const authorField = ref('');
const contentField = ref('');

const save = async () => {
  const updatedPost = {
    title: titleField.value,
    author: authorField.value,
    content: contentField.value,
  };

  try {
    await axios.put(`http://localhost:8080/api/posts/${postId.id}`, updatedPost);
    // Display success message
    showAlert('success', 'Post updated successfully!');
  } catch (error) {
    console.error('Error updating post:', error);
    // Display error message
    showAlert('error', 'Failed to update post. Please try again.');
  }
};

const showAlert = (type, message) => {
  const alertPlaceholder = document.getElementById('postAlertPlaceholder');
  const alertDiv = document.createElement('div');
  alertDiv.classList.add('alert', `alert-${type}`);
  alertDiv.role = 'alert';
  alertDiv.innerText = message;
  alertPlaceholder.innerHTML = '';
  alertPlaceholder.appendChild(alertDiv);
};
</script>
#header{
  font-family: "Poppins",sans-serif;
  color: #11009e;
}
<style scoped></style>
