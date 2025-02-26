import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createSwaggerSpec } from 'next-swagger-doc';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';
import { OpenAPIV3 } from 'openapi-types';

const SwaggerUI = dynamic<{ spec: OpenAPIV3.Document }>(import('swagger-ui-react'), { ssr: false });

function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <SwaggerUI spec={spec} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const spec = createSwaggerSpec({
    apiFolder: 'src/pages/api',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Next Swagger API Example',
        version: '1.0',
      },
    },
  }) as OpenAPIV3.Document; // Type assertion to fix type error

  return {
    props: {
      spec,
    },
  };
};

export default ApiDoc;
