<template>
<div class="md-app-content">
  <md-card class="md-layout-item md-large-size-80">
    <md-card-header>
      <div class="md-title">Booking</div>
    </md-card-header>
    <md-card-content>
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-large-size-80">
          <md-field>
            <label class="badge">Inventory</label>
            <md-input type="text"  :value="selected" :disabled="true"/>
            <md-button class="md-primary md-raised" @click="hideModal">Edit</md-button>
          </md-field>
        </div>
      </div>
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-large-size-80">
          <md-field>
            <label class="badge">Pick Up address</label>
            <md-input type="text"  :value="location.address" :disabled="true"/>
            <md-button class="md-primary md-raised" @click="hideMapPickUp">Edit</md-button>
          </md-field>
        </div>
      </div>
      <div class="md-layout md-gutter">
        <div class="md-layout-item md-large-size-80">
          <md-field>
            <label class="badge">Drop Up address</label>
            <md-input type="text" :value="dropLocation.address" :disabled="true"/>
            <md-button class="md-primary md-raised" @click="hideDropUp">Edit</md-button>
          </md-field>
        </div>
      </div>
      <div class="md-layout-item">
        <div class="md-layout-item md-small-size-100">
            <md-checkbox
                v-model="twoPeopleRequest"
            @change="twoPeopleRequest!==twoPeopleRequest">Do you require 2 people ?</md-checkbox>

        </div>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-large-size-80">
          <md-progress-bar :md-value="30" md-mode="determinate" class="md-accent"></md-progress-bar>
        </div>
      </div>
    </md-card-content>
  </md-card>

  <md-card class="md-layout-item md-large-size-80">
    <md-card-content>
      <Shifters/>
    </md-card-content>
  </md-card>

<md-dialog :md-active.sync="visible">
  <div class="md-layout md-gutter">
    <div class="md-layout-item md-large-size-80">
      <md-field>
        <label class="">Select</label>
        <md-select v-model="selected">
          <md-option v-for="(item, index) in group" :key="index" :value="item">
            {{item}}
          </md-option>
        </md-select>
        <md-button class="md-primary md-raised" @click="hideModal">Close</md-button>

      </md-field>

    </div>
  </div>
</md-dialog>

<md-dialog :md-active.sync="mapVisible">
  <div class="md-layout-item">
    <md-field>
      <p>Please double click on the map to select a location.</p>
    </md-field>

      <div style="width: 500px;height:500px;">
        <Map v-model="location" :key="key" />
    </div>
      <md-button class="md-primary md-raised" @click="reset">Reset</md-button>
      <md-button class="md-primary md-raised" @click="hideMapPickUp">Close</md-button>

  </div>
</md-dialog>
<md-dialog :md-active.sync="mapDropUpVisibility">
  <div class="md-layout-item">
    <md-field>
      <p>Please double click on the map to select a location.</p>
    </md-field>
      <div style="width:500px;height:500px;">
        <Map v-model="dropLocation" :key="key" />
      </div>
  <md-button class="md-primary md-raised" @click="resetDrop">Reset</md-button>
  <md-button class="md-primary md-raised" @click="hideDropUp">Close</md-button>
  </div>
</md-dialog>

  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import Map from './Map';
import Shifters from "@/components/Shifters";
export default {
  name: "Modal",

  components: {
    Map,
    Shifters
  },
  data() {
    return {
      twoPeopleRequest: false,
      dialog: false,
      location: {},
      dropLocation: {},
      key: 1,
      selected: '',
      group: [
          "1x Item",
          "2x Items"
      ],
    }
  },
  methods: {
    ...mapActions([
        'hideModal',
        'hideMapPickUp',
        'hideDropUp'
    ]),
    reset() {
      this.key += 1;
      this.location = {};
    },
    resetDrop() {
      this.dropKey += 1;
      this.dropLocation = {};
    }
  },


  computed: {
    ...mapState({
      visible: state => state.modalVisibility,
      mapVisible: state => state.mapPickupVisibility,
      mapDropUpVisibility: state => state.mapDropVisibility
    }),

  }
}
</script>

<style scoped>

</style>
