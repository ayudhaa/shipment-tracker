<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-slate-800">Shipment List</h1>

    <div class="overflow-x-auto bg-white rounded-lg shadow">
      <table class="w-full text-left border-collapse">
        <thead class="bg-slate-100">
          <tr>
            <th class="p-4 border-b">ID</th>
            <th class="p-4 border-b">Origin & Destination</th>
            <th class="p-4 border-b">Status</th>
            <th class="p-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in store.shipments"
            :key="item.id"
            class="hover:bg-slate-50"
          >
            <td class="p-4 border-b font-mono">{{ item.id }}</td>
            <td class="p-4 border-b">
              {{ item.origin }} → {{ item.destination }}
            </td>
            <td class="p-4 border-b">
              <span
                :class="
                  item.status === 'Assigned'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                "
                class="px-3 py-1 rounded-full text-xs font-medium"
              >
                {{ item.status }}
              </span>
            </td>
            <td class="p-4 border-b">
              <router-link
                :to="'/detail/' + item.id"
                class="text-blue-600 hover:underline font-medium"
              >
                View Details
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { useShipmentStore } from "../store/shipmentStore";
const store = useShipmentStore();
</script>
