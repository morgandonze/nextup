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
      template: 'index.ts',
      target: `${pagesDir}/index.ts`
    })
    await template.generate({
      template: 'package.json.ejs',
      target: `${appDir}/package.json`,
      props: { name: appName }
    })

    system.run(
      `cd ${appName} && yarn init -y && yarn add react react-dom next && yarn add --dev typescript @types/react @types/node`
    )
    print.info('Done!')
  }
}

module.exports = command
