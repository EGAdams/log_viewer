<template>
    <div id="log_app">
    <sourced-log-viewer-vue  
        data_source_type="url"
        data_source_location="https://mycustombusinessapp.com/wp-content/plugins/MCBA-Wordpress/runQuery.php">
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