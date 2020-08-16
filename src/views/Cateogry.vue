<template>
  <v-container>
    <v-row class="justify-center mt-3">
      <h3>Create New Category</h3>
      <v-col cols="10">
        <v-text-field v-model="category" label="Category Name" />
        <v-btn class="d-block mx-auto" @click="addCategory">
          <v-icon dark>mdi-plus</v-icon>
          Add
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="justify-center mt-3">
      <v-col cols="11">
        <v-list subheader>
          <v-subheader>Recent Categories</v-subheader>
          <v-list-item
            v-for="(category, index) in $store.getters.getCategories"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title>{{ category }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-icon>
              <v-btn @click="editCategory(index)" text>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn @click="deleteCategory(index)" text>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Edit Category</v-card-title>
        <v-card-text>
          <v-text-field v-model="edit_cat" label="Category Name" />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false"
            >Cancel</v-btn
          >
          <v-btn color="green darken-1" text @click="updateCategory"
            >Edit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "Cateogry",
  data: () => ({
    category: "",
    dialog: false,
    edit_cat: "",
    edit_index: ""
  }),
  methods: {
    addCategory() {
      this.$store.commit("addCategory", this.category);
      this.category = '';
    },
    editCategory(index) {
      this.dialog = true;
      this.edit_cat = this.$store.getters.getCategories[index];
      this.edit_index = index;
    },
    deleteCategory(index) {
      if (confirm('Are you Sure')){
        this.$store.commit("delCategory",index);
      }
    },
    updateCategory() {
      this.$store.commit("setCategory", {
        index: this.edit_index,
        category: this.edit_cat
      });
      this.dialog=false;
    }
  }
};
</script>

<style scoped></style>
