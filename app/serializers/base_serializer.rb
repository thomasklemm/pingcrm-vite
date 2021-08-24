# frozen_string_literal: true

# Internal: Provides simple integration with cancancan.
class BaseSerializer < Oj::Serializer
  private

  delegate :can?, :polymorphic_url, to: :scope

  # Backwards Compatibility: Allows to access the controller in the same way
  # than ActiveModel::Serializers.
  def scope
    @scope ||= RequestLocals[:current_controller]
  end
end
