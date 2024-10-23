<template>
    <v-container>
      <v-btn @click="scanNfc">Scan NFC Tag</v-btn>
      <v-alert v-if="error" type="error">{{ error }}</v-alert>
      <v-card v-if="sku">
        <v-card-title>{{ sku.sku_name }}</v-card-title>
        <v-card-text>
          Description: {{ sku.description }}<br />
          Price: {{ sku.price }}<br />
          Quantity: {{ sku.quantity }}<br />
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        sku: null,
        error: null
      };
    },
    methods: {
      async scanNfc() {
        if ('NDEFReader' in window) {
          try {
            const ndef = new NDEFReader();
            await ndef.scan();
            ndef.onreading = event => {
              const { serialNumber } = event;
              this.fetchSku(serialNumber);
            };
          } catch (error) {
            this.error = 'NFC scan failed: ' + error.message;
          }
        } else {
          this.error = 'NFC is not supported on this device.';
        }
      },
      async fetchSku(nfcUid) {
        const { data, error } = await this.$supabase
          .from('skus')
          .select('*')
          .eq('nfc_uid', nfcUid)
          .single();
  
  
        if (error) {
          this.error = 'SKU not found';
        } else {
          this.sku = data;
        }
      }
    }
  };
  </script>
  
  