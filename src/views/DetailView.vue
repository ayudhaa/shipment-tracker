<template>
  <div class="container mx-auto p-6 max-w-2xl">
    <router-link to="/" class="text-slate-500 hover:text-slate-800 mb-4 inline-block">← Back to List</router-link>
    
    <div class="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
      <h2 class="text-2xl font-bold mb-4">Shipment Details</h2>
      
      <div class="space-y-3 mb-8">
        <p><span class="text-gray-500">Route:</span> {{ shipment.origin }} to {{ shipment.destination }}</p>
        <p><span class="text-gray-500">Vehicle Type:</span> {{ shipment.vehicle }}</p>
        <p><span class="text-gray-500">Current Transporter:</span> 
          <span class="font-semibold">{{ shipment.transporter || 'Not Assigned' }}</span>
        </p>
      </div>

      <div class="bg-slate-50 p-6 rounded-lg">
        <label class="block text-sm font-medium mb-2">Assign New Transporter</label>
        <select v-model="selected" class="w-full p-2 border rounded-md mb-4 bg-white">
          <option value="">-- Select Transporter --</option>
          <option v-for="name in store.transporters" :key="name" :value="name">{{ name }}</option>
        </select>
        
        <button @click="handleAssign" 
                class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
          Confirm Assignment
        </button>

        <p v-if="feedback" :class="feedback.isError ? 'text-red-600' : 'text-green-600'" class="mt-3 text-center text-sm">
          {{ feedback.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useShipmentStore } from '../store/shipmentStore'

const route = useRoute()
const store = useShipmentStore()
const shipment = store.shipments.find(s => s.id === route.params.id)

const selected = ref('')
const feedback = ref(null)

const handleAssign = () => {
  if (!selected.value) {
    feedback.value = { text: 'Please select a transporter!', isError: true }
    return
  }
  
  store.assignTransporter(shipment.id, selected.value)
  feedback.value = { text: 'Transporter assigned successfully!', isError: false }
}
</script>