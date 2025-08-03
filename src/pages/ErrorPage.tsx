import { ReactNode } from 'react';
import {
  isRouteErrorResponse,
  useParams,
  useRouteError,
} from 'react-router-dom';

import { Button } from '~/components/controls';
import { ClearFullScreenLayout } from '~/components/layout';
import { Typography } from '~/components/typography';
import { defaultMessages, knownCodes } from '~/errors';

export function ErrorPage({ logo }: { logo: ReactNode }) {
  const error = useRouteError();
  const { code: paramCode = '' } = useParams<{ code?: string }>();

  const parsedCode = parseInt(paramCode, 10);
  let code = paramCode && !Number.isNaN(parsedCode) ? parsedCode : 500;

  if (isRouteErrorResponse(error)) {
    code = error.status;
  }

  const message: ReactNode | string =
    defaultMessages[code] || defaultMessages[knownCodes.UNKNOWN];

  return (
    <ClearFullScreenLayout className="max-w-full">
      <main className="flex grow flex-col justify-center items-center mb-6 text-center desktop:mb-8">
        <h1 className="my-0 mr-3.5 text-BLUE_100 text-[12.15rem]/4 desktop:mb-0 desktop:text-[15.15rem]">
          {code}
        </h1>
        <Typography className="mb-6 text-BLACK_70" size="l" dSize="h3">
          {message}
        </Typography>
        {/* сделано через обычную ссылку, а не react Link,
        чтобы принудительно перезагрузить страницу */}
        <Button href="/" block={false}>
          Вернуться на главную
        </Button>
      </main>
      {logo}
    </ClearFullScreenLayout>
  );
}
