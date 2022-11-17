import * as fengariWebBundle from "fengari-web";
import { load } from 'fengari-web';

window.myFoo = (a) => 6 + a;

const fn = load(`
print "lalala"
return js.global:myFoo(2)
`);

console.log("Hello World!", fn());

