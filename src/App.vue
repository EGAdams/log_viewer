<template>
    <div id="log_app">
    <sourced-log-viewer-vue  
        data_source_type=     "url"
        data_source_location= "http://localhost:8080"
        object_id=            "MessageManager_1616">
    </sourced-log-viewer-vue>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SourcedLogViewerVue from "./components/SourcedLogViewer.vue";

export default defineComponent({
  name: "ServeDev",
  components: {
    SourcedLogViewerVue,
  },
  data() {
    return {
      test_object_name: "sourced-log-viewer-vue",
      logs: [],
    };
  },
  props: {
    config: Object
  }
});
</script>