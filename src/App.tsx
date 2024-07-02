import { useEffect } from 'react';
import { Button } from 'src/components/ui/button';
import { PetApiFactory } from './generate';

const petApi = PetApiFactory();

export const App = () => {
  useEffect(() => {
    async () => {
      const { data } = await petApi.getPetById(123);
    };
  });

  return (
    <div className="absolute left-10 top-0">
      <Button>Click me</Button>
    </div>
  );
};
