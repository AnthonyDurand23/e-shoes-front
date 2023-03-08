import { v4 as uuidv4 } from 'uuid';
import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { SelectOptionType } from '@/types/types';

interface SelectProps {
  name: string;
  classname: string;
  label?: string;
  labelClassname?: string;
  selectedOption: SelectOptionType;
  setSelectedOption: React.Dispatch<React.SetStateAction<SelectOptionType>>;
  options: SelectOptionType[];
}

const Select: React.FC<SelectProps> = ({
  name,
  classname,
  label,
  labelClassname,
  selectedOption,
  setSelectedOption,
  options,
}) => {
  return (
    <Listbox name={name} value={selectedOption} by="id" onChange={setSelectedOption}>
      <div className="flex items-center gap-2">
        {label && <Listbox.Label className={labelClassname}>{label}</Listbox.Label>}
        <div className={`bg-neutrals-white ${classname}`}>
          <Listbox.Button className="listbox-button">
            <span className={`block truncate ${selectedOption.id ? 'text-neutrals-900' : 'text-neutrals-500'}`}>
              {selectedOption.value}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-3 md:h-5 w-3 md:w-5" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="listbox-options">
              {options &&
                options.map((option) => (
                  <Listbox.Option
                    key={uuidv4()}
                    className={({ active }) =>
                      `relative cursor-default select-none py-1 md:py-2 pl-8 md:pl-10 pr-2 md:pr-4 ${
                        active ? 'bg-primary-300' : ''
                      }`
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {option.value}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <CheckIcon className="h-3 md:h-5 w-3 md:w-5 text-primary-500" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </Transition>
        </div>
      </div>
    </Listbox>
  );
};

export default Select;
