import React from 'react'
import { useTranslation }  from 'react-i18next'

export default function TermConditions() {
  const [ t ] = useTranslation("global");
  return (
    <div className='text-center pt-10'>
    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
      {t("modules.login.title")}
    </h1>
    <p className="mb-6 text-lg text-justify font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque malesuada, neque ut pulvinar posuere, nulla libero sodales orci, quis lacinia arcu lorem faucibus nulla. Suspendisse feugiat augue sit amet metus laoreet aliquet. Praesent placerat leo lectus, eu egestas mi posuere at. Etiam luctus, metus at ornare sollicitudin, odio ex fermentum tortor, a mattis felis purus a libero. Maecenas in venenatis lorem, vel dignissim nisl. 
    </p>
</div>
  )
}
