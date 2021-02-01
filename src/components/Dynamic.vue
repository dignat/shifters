<template>
  <div>
    <input type="number" name="number" v-model="arrayLength"/>
<div v-for="(field, index) in Number(arrayLength)" :key="index">
  <label>Key</label>
  <input type="text" name="key" ref="itemKey">
  <label>Value</label>
  <input type="text" name="value" ref="itemVal"/>
<button name="submit" @click="createItems(index)">Push</button>
</div>

  </div>

</template>

<script>
export default {
name: "Dynamic",
  data() {
  return {
    fields:  [],
    items: [],
    arrayLength: 0

  }
  },
  methods: {
    createItems(index) {
     let itemKey = this.$refs.itemKey[index].value;
     let itemVal = this.$refs.itemVal[index].value;

     let object={}
     object[itemKey] = itemVal;
     this.items.push(object)
      console.log(itemKey, itemVal, index, this.items)
    }
  },
}
</script>

<style scoped>

</style>
