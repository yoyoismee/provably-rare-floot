import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Review full icon at ....
// https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=close

type Props = {
  fill: any
  noMargin?: boolean
}

// Font Awesome Icon
const Icon = ({ fill, noMargin = false }: Props) => {
  return (
    <FontAwesomeIcon
      icon={fill}
      className={`${noMargin ? '' : 'mr-3'} fa-show`}
    />
  )
}

export default Icon