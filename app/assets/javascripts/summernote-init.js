$(document).on('turbolinks:load', () => {
  $('[data-provider="summernote"]').each((index, element) => {
    $(element).summernote({
      height: 600,
      lang: 'ja-JP',
      codeviewFilter: true,
      codeviewIframeFilter: false,
    })
  })
})