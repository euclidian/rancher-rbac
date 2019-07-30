<template>
  <v-dialog v-model="showEnvironment" persistent width="900">
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>Environment List</v-card-title>

      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-data-table :headers="headers" :items="environments" class="elevation-1">
                <template v-slot:items="props">
                  <td>{{ props.item.key }}</td>
                  <td>{{ props.item.value }}</td>
                </template>
              </v-data-table>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" flat @click="close()">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["idProject", "showEnvironment"],
  data() {
    return {
        headers: [
          { text: 'Key', value: 'key' },
          { text: 'Value', value: 'value' }
        ],
      environments: []
    };
  },
  mounted() {
    var that = this;
    console.log("IDNYA", that.idProject);
    axios
      .post("/tiketux/rancher/stack/api/detailservicestack", {
        id: that.idProject
      })
      .then(response => {
        console.log(response.data);
        that.environments = response.data.data;
      })
      .catch(error => {
        console.log(error.response.data);
      });
  },
  methods: {
    close() {
      this.$emit("closeEnvironments");
    }
  }
};
</script>
