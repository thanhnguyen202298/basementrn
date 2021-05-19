import React from 'react'

export default class AO {
    static isClassComponent = (component) => {
        return (
            typeof component === 'function' &&
            !!component.prototype.isReactComponent
        )
    }
    readonly v = ""
    static isFunctionComponent(component) {
        return (
            typeof component === 'function' &&
            String(component).includes('return React.createElement')
        )
    }

    static isReactComponent(component) {
        return (
            this.isClassComponent(component) ||
            this.isFunctionComponent(component)
        )
    }

    static isElement(element) {
        return React.isValidElement(element);
    }

    static isDOMTypeElement(element) {
        return this.isElement(element) && typeof element.type === 'string';
    }

    static isCompositeTypeElement(element) {
        return this.isElement(element) && typeof element.type === 'function';
    }

    static analysComponent(component) {
        if (component === null || component === undefined) return
        Object.entries(component).map((k) => {
            if (Array.isArray(k))
                k.map((v) => {
                    if (typeof v === 'object') {
                        if (this.isReactComponent(v))
                            console.log("f ",{ ...v })

                    }
                    else if (v !== null || v !== undefined) console.log(v)

                })
            else if (typeof k === 'object') {
                this.analysComponent(k)
            }
        })
    }
}