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
      title: 'Добрые дела — медиа-сервис для волонтеров и НКО',
      description: '«Добрые дела» — медиа-сервис, который помогает волонтерам и активистам найти для себя мероприятие или проект, в котором хотелось бы поучаствовать',
      type: 'website',
      url: request.original_url,
      image: image_url('https://vk.com/away.php?utf=1&to=http%3A%2F%2Fdobryedela.herokuapp.com%2Fimages%2Fdobryedelaimage.png')
      }
    }
  end
end
