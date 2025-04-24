import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Facil de usar',
    Svg: require('@site/static/img/aprende.svg').default,
    description: (
      <>
        Aprende a inspeccionar y entender la estructura del HTML y CSS con DevTools
      </>
    ),
  },
  {
    title: 'Investiga diferentes estilos',
    Svg: require('@site/static/img/modificar.svg').default,
    description: (
      <>
        Modifica elementos y estilos en vivo, ideal para prototipos rápidos o debugging.
      </>
    ),
  },
  {
    title: 'Arregla problemas',
    Svg: require('@site/static/img/consola.svg').default,
    description: (
      <>
        Usa la consola, el monitor de red y el panel Performance para solucionar errores.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
