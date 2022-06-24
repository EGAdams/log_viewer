<template>
    <div id="log_app">
    <sourced-log-viewer-vue config='{
        type: "url",
        location, "https://mycustombusinessapp.com/wp-content/plugins/MCBA-Wordpress/runQuery.php" }'>
        </sourced-log-viewer-vue>
    </div>
</template>

<script lang="ts">
// import type { ISourceConfig } from "log-object-processor";
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