import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'nextup',
  run: async toolbox => {
    const { filesystem, parameters, print, system, template } = toolbox

    print.info('Running…')

    const appName = parameters.first
    const appDir = `${process.cwd()}/${appName}`
    const pagesDir = `${appDir}/pages`
    filesystem.dir(`${appDir}`)
    filesystem.dir(pagesDir)

    await template.generate({
      template: 'index.tsx',
      target: `${pagesDir}/index.tsx`
    })
    await template.generate({
      template: 'package.json.ejs',
      target: `${appDir}/package.json`,
      props: { name: appName }
    })

    await system.run(
      `cd ${appName} && yarn init -y && yarn add react react-dom react-native-web next typescript @types/react @types/node react-native-web`
    )
    print.info('Done! `yarn run dev` to start')
  }
}

module.exports = command
