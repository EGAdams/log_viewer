<!-- SourcedLogViewer component -->
<template>
  <log-viewer v-bind:object_name="test_object_name" v-bind:logs="logs"></log-viewer>
  <button @click="startLogging">Start</button>
  <button @click="clearLog">Clear Log</button>
  <input v-model="monitored_object_id" />
</template>

<script lang="ts">
import { defineComponent          } from "vue";
import   LogViewer                  from "log-vuer";
import { LogObjectContainerSource } from "log-object-processor";
import { SourceConfig             } from "./SourceConfig";

import jQuery from 'jquery';
export default defineComponent({
  name: "SourcedLogViewer",
  components: { LogViewer },
  data() {
    return {
      log_count: 0,
      test_object_name: "Log Vuer",
      logObjectContainerSource: new LogObjectContainerSource(
        new SourceConfig(this.data_source_type, this.data_source_location)
      ),
      read_interval: 0,
      monitored_object_id: "MessageManager_1616",
      logs: [{ id: "1", timestamp: 100, message: "ready.", method: "No Source." }],
    }; },
  methods: {
    startLogging() {
      setInterval(() => {
        this.logObjectContainerSource.refresh(this.monitored_object_id);
        this.logs = this.logObjectContainerSource.logObjectProcessor.getWrittenLogs();
        if (this.log_count != this.logs.length) {
          jQuery("#tester_1_log_viewer").animate(
            { scrollTop: jQuery("#tester_1_log_viewer").prop("scrollHeight") * 2 },
            150
          );
          this.log_count = this.logs.length;
        }
      }, 1000); },
    async clearLog() {
      this.logObjectContainerSource.logObjectProcessor.clearLogs();
      this.logs = []; }},
  props: {
    data_source_type: {     type: String, default: "url"                   },
    data_source_location: { type: String, default: "http://localhost:8080" }}
});
</script>

<style scoped></style>
