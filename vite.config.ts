import { defineConfig } from 'vite'

import { createVuePlugin as Vue2Plugin } from 'vite-plugin-vue2'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import RubyPlugin from 'vite-plugin-ruby'
import WindiCSS from 'vite-plugin-windicss'
import ReloadOnChange from 'vite-plugin-full-reload'

export default defineConfig({
  plugins: [
    ReloadOnChange(['config/routes.rb', 'app/views/**/*']),
    ScriptSetup(),
    RubyPlugin(),
    Vue2Plugin(),
    WindiCSS({ root: process.cwd() }),
  ],
})
