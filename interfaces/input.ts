export interface IInput {
  type?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  modelValue?: string;
  onValidate?: () => void;
}
