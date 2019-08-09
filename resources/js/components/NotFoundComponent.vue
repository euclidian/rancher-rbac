<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Nothing to do here</div>

          <div class="card-body">
            <center>
              <v-icon>fas fa-exclamation-triangle</v-icon>
              <p>Page Not Found</p>
            </center>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
