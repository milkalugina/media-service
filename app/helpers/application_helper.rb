module ApplicationHelper
  def default_meta_tags
    {
      site: 'dobryedela.ru',
      title: 'Добрые дела',
      reverse: true,
      separator: '—',
      description: 'Медиа-сервис для волонтеров и НКО',
      keywords: 'волонтерство, НКО, организация, волонтер',
      canonical: request.original_url,
      noindex: !Rails.env.production?,
      icon: [
        # { href: image_url('favicon.ico') },
        # { href: image_url('icon.jpg'), rel: 'apple-touch-icon', sizes: '180x180', type: 'image/jpg' },
      ],
      og: {
        site_name: 'dobryedela.ru',
        title: 'Добрые дела',
        description: 'Медиа-сервис для волонтеров и НКО',
        type: 'website',
        url: request.original_url,
        # image: image_url('login-page.png')
      }
    }
  end
end
