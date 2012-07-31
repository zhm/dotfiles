require "rubygems"

# Add all gems installed in the system to the $LOAD_PATH so they can be used in Rails console with Bundler
if defined?(::Bundler)
  Dir.glob("#{Gem.path.first}/gems/*/lib").each do |path|
    $LOAD_PATH << path
  end
end

require 'interactive_editor'
require 'irb/completion'
require 'map_by_method'
require 'what_methods'
require 'pp'

class Object
  def local_methods(obj = self)
    (obj.methods - obj.class.superclass.instance_methods).sort
  end

  # add a `p` method to all objects to pretty print
  unless self.respond_to? :p
    define_method :p do
      pp self
    end
  end
end
