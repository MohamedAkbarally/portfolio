import React, { useEffect, useState } from 'react';

import Box from '@material-ui/core/Box';
import Certificate from '../common/Certificate';
import CertificateSkeleton from '../common/CertificateSkeleton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import sanityClient from '../../client';

const useStyles = makeStyles((theme) => ({
  grid: { float: 'middle', textAlign: 'center' },
  title: { textAlign: 'left' },
}));

export default function CV({ certificates, setCertificates }) {
  const classes = useStyles();

  useEffect(() => {
    if (certificates == null) {
      sanityClient
        .fetch(`*[_type == "certificate"]`)
        .then((data) => setCertificates(data))
        .catch(console.error);
    }
    return;
  }, []);

  console.log(certificates);

  return certificates ? (
    <React.Fragment>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Work Experience
      </Typography>
      <Box display="flex" flexDirection="row" flexWrap="wrap" p={1} m={1}>
        {certificates
          .filter((cert) => cert.type == 'work')
          .map((cert) => (
            <Box p={1}>
              <Certificate
                key={cert.title}
                title={cert.title}
                desc={cert.description}
                buttons={['hello']}
                type="Work"
              ></Certificate>
            </Box>
          ))}
      </Box>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Formal Education
      </Typography>
      <Box display="flex" flexDirection="row" flexWrap="wrap" p={1} m={1}>
        {certificates
          .filter((cert) => cert.type == 'formal')
          .map((cert) => (
            <Box p={1}>
              <Certificate
                key={cert.title}
                title={cert.title}
                desc={cert.description}
                buttons={['hello']}
                type="Formal"
              ></Certificate>
            </Box>
          ))}
      </Box>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Online Course Cerficates
      </Typography>
      <Box display="flex" flexDirection="row" flexWrap="wrap" p={1} m={1}>
        {certificates
          .filter((cert) => cert.type == 'online')
          .map((cert) => (
            <Box p={1}>
              <Certificate
                key={cert.title}
                title={cert.title}
                desc={cert.description}
                buttons={['hello']}
                type="Online"
              ></Certificate>
            </Box>
          ))}
      </Box>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Work Experience
      </Typography>
      <Box display="flex" flexDirection="row" flexWrap="wrap" p={1} m={1}>
        <Box p={1}>
          <CertificateSkeleton></CertificateSkeleton>
        </Box>
        <Box p={1}>
          <CertificateSkeleton></CertificateSkeleton>
        </Box>
      </Box>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Formal Education
      </Typography>
      <Box display="flex" flexDirection="row" flexWrap="wrap" p={1} m={1}>
        <Box p={1}>
          <CertificateSkeleton></CertificateSkeleton>
        </Box>
        <Box p={1}>
          <CertificateSkeleton></CertificateSkeleton>
        </Box>
      </Box>

      <Typography className={classes.title} variant="h6" gutterBottom>
        Online Course Cerficates
      </Typography>
      <Box display="flex" flexDirection="row" flexWrap="wrap" p={1} m={1}>
        <Box p={1}>
          <CertificateSkeleton></CertificateSkeleton>
        </Box>
        <Box p={1}>
          <CertificateSkeleton></CertificateSkeleton>
        </Box>
      </Box>
    </React.Fragment>
  );
}
