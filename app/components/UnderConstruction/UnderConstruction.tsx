import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import '@fontsource/press-start-2p/latin-400.css'
import styles from './UnderConstruction.module.scss'

type UnderConstructionProps = {
  title: string;
}

export function UnderConstruction({ title }: UnderConstructionProps) {
  return (
    <Container>
      <Box className={styles.underConstruction}>
        <img
          alt="Pixel-art construction worker holding a roadwork sign."
          className={styles.underConstruction__worker}
          src="/images/under-construction-worker.png"
        />
        <Typography variant="h1">{title}</Typography>
        <p className={styles.underConstruction__status}>Under construction</p>
      </Box>
    </Container>
  )
}
